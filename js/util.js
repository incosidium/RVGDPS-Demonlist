// https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
export function getYoutubeIdFromUrl(url) {
    return url.match(
        /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
    )?.[1] ?? '';
}

// Extract TikTok video ID from URL
export function getTikTokIdFromUrl(url) {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?tiktok\.com\/@[\w.-]+\/video\/(\d+)/);
    return match?.[1] ?? '';
}

// Extract Instagram Reel ID from URL
export function getInstagramReelIdFromUrl(url) {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?instagram\.com\/reel\/([A-Za-z0-9_-]+)/);
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
    
    // Fallback to YouTube if no match
    return `https://www.youtube.com/embed/${youtubeId}`;
}

export function localize(num) {
    return num.toLocaleString(undefined, { minimumFractionDigits: 3 });
}

export function getThumbnailFromId(id) {
    return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}
