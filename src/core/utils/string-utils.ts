export default class StringUtils {
    public static isEmpty(value: string | null | undefined): boolean {
        if (!value) return true;
        
        return 0 >= value.trim().length;
    }

    public static isNotEmpty(value: string | null | undefined): boolean {
        return !this.isEmpty(value);
    }
}