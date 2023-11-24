export default abstract class BaseDto<Entity> {
    public abstract toEntity(): Entity;
}