

export class UserProfile {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    bio: string;
    ispublic: boolean;

    constructor(uid: string,
        email: string,
        displayName: string,
        photoURL: string,
        bio: string,
        ispublic: boolean) {
        this.uid = uid;
        this.email = email;
        this.displayName = displayName;
        this.photoURL = photoURL;
        this.bio = bio
        this.ispublic = ispublic;
    }
}