// Robustly extract TikTok video ID from standard, mobile, or parameterized URLs
export function getTikTokIdFromUrl(url) {
    if (!url) return '';
    // Matches standard desktop/mobile links and strips out any trailing queries like ?is_from_webapp...
    const match = url.match(/\/video\/(\d+)/);
    return match?.[1] ?? '';
}

// Detect video platform and return appropriate embed URL
export function embed(video) {
    if (!video) return '';
    
    // Check for YouTube
    const youtubeId = getYoutubeIdFromUrl(video);
    if (youtubeId) {
        return `https://www.youtube.com/embed/${youtubeId}`;
    }
    
    // Check for TikTok
    if (video.includes('tiktok.com')) {
        const tiktokId = getTikTokIdFromUrl(video);
        if (tiktokId) {
            return `https://www.tiktok.com/embed/v2/${tiktokId}`;
        }
    }
    
    // Check for Instagram Reels
    if (video.includes('instagram.com/reel')) {
        const instagramId = getInstagramReelIdFromUrl(video);
        if (instagramId) {
            return `https://www.instagram.com/p/${instagramId}/embed`;
        }
    }
    
    // Fallback: If it doesn't match anything else, return original string (e.g. direct mp4 or Twitch links)
    return video;
}

    return array;
}
