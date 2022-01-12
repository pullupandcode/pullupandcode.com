export default function TwitchEmbed(episodeId: string) {
    const embedSrc = `https://player.twitch.tv/?collection=NTV2c7T-xxY-Wg&video=${episodeId}&parent=localhost`
    
    return (
        <iframe src={embedSrc} frameBorder="0" scrolling="no" height="378" width="620"></iframe>
    )
}