export class PostSaved {

    post: string;
    userUuid: string;
    
    constructor(post: string,
                userUuid: string) {
        this.post = post;
        this.userUuid = userUuid;
    }

}