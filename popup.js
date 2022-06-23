document.addEventListener('DOMContentLoaded', () => {
    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true }; //gotta know when the extension's icon is ready for clicking relative to the downloaded info it needs to grab from the DOM

    chrome.tabs.query(query, (tabs) => {
        dialogBox.innerHTML = getMeowedTitle(tabs[0].title); //go get the title from the DOM
    });
});

const getMeowedTitle = (tabTitle) => {
    const meowTitle = `${getRandomMeow()} Meow. You are at: ${tabTitle}` //this is for the last words of whatever catloaf has to say as an introduction to the active tab's title
    return meowTitle;
}

const meows = [
    'Gotta feel comfortable where you are to loaf like this. Anyways, ',
    'You not sure where you at? Are you kidding? No wonder you cannot loaf.',
    'i can haz cheezeburger? Not gonna stop loafin here unless yeah, i can haz, right meow. ',
    'Lotus position aint nowhere near the loaf posture. So get there already.',
    'Ground-based catloaf reassurance is way better than ceiling cat surveillance, right? Relax. ',
    'meh ... .. . ',
    'Got too many tabs open, eh? Well I know all about that',
    'I loaf and lazy where I am, right here, right ',
    'right here, right meow, ... we figure out where you are. ',
    'live loaf love laugh ... loaf love live laugh - and, well, ... ',
    'I feel pretty, pretty, pretty good. Know what I mean? ',
    'yawn, meow . I said - ',
    'Right meow, I chillaxin right here. Where are you, right meow, where? Here, before I tell you, take a final obligatory meow. This gratuitous meow, too. And yet another - ',
    'double meh, which is somehow less meh than a single meh, really, if you think about it ... anyways, ',
    'Zen and the Art of Loaf Posture Maintenance says about loaf nature- one who loafs is one with where they are. '
] // these are the beginning words of whatever catloaf says before announcing the tab title 

const getRandomMeow = () => {
    const meow = meows[Math.floor(Math.random() * meows.length)];
    return meow;
} // mix it up for catloaf