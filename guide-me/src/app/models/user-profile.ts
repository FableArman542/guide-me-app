

export class UserProfile {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;

    constructor(uid: string,
        email: string,
        displayName: string,
        photoURL: string) {
        this.uid = uid;
        this.email = email;
        this.displayName = displayName;
        this.photoURL = photoURL;
    }
}