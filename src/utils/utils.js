export function rateLikes(likes, dislikes) {
    return likes / (likes + dislikes) * 100
}