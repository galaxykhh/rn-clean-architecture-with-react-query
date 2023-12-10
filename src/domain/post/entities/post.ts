import StringUtils from "@core/utils/string-utils";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export class PostHelper {
    public static hasContent(post: Post): boolean {
        return StringUtils.isNotEmpty(post.body);
    }
}