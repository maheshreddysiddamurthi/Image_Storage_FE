import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser extends mongoose.Document {
    email: string;
    password?: string;
    provider?: 'local' | 'google';
    username?: string;
    firstName?: string;
    lastName?: string;
    mobileNumber?: string;
    profileImage?: string;
    bio?: string;
    socialLinks?: {
        instagram?: string;
        twitter?: string;
        youtube?: string;
        tiktok?: string;
    };
    isVerified: boolean;
    role: 'influencer' | 'business';
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: function (this: IUser) {
            return !this.provider; // Password is required only if not using OAuth
        },
    },
    provider: {
        type: String,
        enum: ['local', 'google'],
        default: 'local',
    },
    username: {
        type: String,
        unique: true,
        trim: true,
        sparse: true,
    },
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    mobileNumber: {
        type: String,
        trim: true,
    },
    profileImage: {
        type: String,
        default: '',
    },
    bio: {
        type: String,
        default: '',
    },
    socialLinks: {
        instagram: { type: String, default: '' },
        twitter: { type: String, default: '' },
        youtube: { type: String, default: '' },
        tiktok: { type: String, default: '' },
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ['influencer', 'business'],
        default: 'influencer',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Hash password before saving
userSchema.pre('save', async function (this: IUser, next) {
    if (!this.isModified('password') || !this.password) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        if (error instanceof Error) {
            return next(error);
        }
        return next(new Error('Error hashing password'));
    }
});

// Method to compare password
userSchema.methods.comparePassword = async function (this: IUser, candidatePassword: string) {
    if (!this.password) return false;
    return bcrypt.compare(candidatePassword, this.password);
};

// Update the updatedAt timestamp before saving
userSchema.pre('save', function (this: IUser, next) {
    this.updatedAt = new Date();
    next();
});

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User; 