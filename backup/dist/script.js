var info = {
  'name': 'Chris McNally',
  'subtitle': 'Design / Development / Consulting',
  'bio': 'A professional web developer with a wide ranging skillset and an eye for detail, quality and good design.',
  'contact_links': [{
    'name': 'chrismcnally.co.uk',
    'link': 'https://chrismcnally.co.uk' },
  {
    'name': 'codepen.io',
    'link': 'https://codepen.io/chrismcnally' },
  {
    'name': 'linkedin.com',
    'link': 'https://uk.linkedin.com/in/chrismcnally1' },
  {
    'name': 'twitter.com',
    'link': 'https://twitter.com/ChrisMcNallyWeb' }],

  'work_history': [{
    'title': 'Senior Web Developer/Team Lead',
    'location': 'Gear4music',
    'date': '2016 - 2018',
    'text': 'Working within a large team of super talented in house developers looking after a global ecommerce brand' },
  {
    'title': 'Web Development Manager',
    'location': 'Haines Watts Technology',
    'date': '2013 - 2016',
    'text': 'Leading a team of developers and providing sites and systems to a varied client base.' },
  {
    'title': 'Freelance Developer',
    'location': 'UK',
    'date': '2005 -2013',
    'text': 'Providing an affordable design and build solution which allowed many clients to have a unique web presence' }],



  'projects': [{
    'name': 'Love or Money',
    'desc': 'Cool React based data visualisation tool and Wordpress Microsite',
    'tags': [
    'React', 'Wordpress', 'graphs'],

    'colors': [
    '#E30613', '#00698C', '#737373', '#5CB4EB'],

    'image_type': 'tall',
    'images': [
    'https://chrismcnally.co.uk/assets/screens/love_or_money/tool/screen2.png',
    'https://chrismcnally.co.uk/assets/screens/love_or_money/tool/screen6.png',
    'https://chrismcnally.co.uk/assets/screens/love_or_money/home.png'] },

  {
    'name': 'Marketing Microsite',
    'desc': 'Pretty little website to showcase new promotions',
    'tags': [
    'scroll effects', 'floating nav'],

    'colors': [
    '#E87722', '#222222'],

    'image_type': 'tall',
    'images': [
    'https://chrismcnally.co.uk/assets/screens/inside_track/screen1.PNG',
    'https://chrismcnally.co.uk/assets/screens/inside_track/screen4.PNG',
    'https://chrismcnally.co.uk/assets/screens/inside_track/screen9.PNG'] },

  {
    'name': 'Personal Website chrismcnally.co.uk',
    'desc': 'My own website, always a work in progress and was a lot of fun to make !',
    'tags': [
    'wordpress', 'animation', 'vertical nav'],

    'colors': [
    '#976BBA', '#00BCD4', '#A6C0DC', '#3B3B3A'],

    'image_type': 'tall',
    'images': [
    'https://chrismcnally.co.uk/assets/screens/cm/home.png',
    'https://chrismcnally.co.uk/assets/screens/cm/me.png',
    'https://chrismcnally.co.uk/assets/screens/cm/contact.png'] },

  {
    'name': 'theblackheartorchestra.com',
    'desc': 'Stunning minimal site for popular folk band, the blackheart orchestra',
    'tags': [
    'wordpress', 'fullscreen', 'music'],

    'colors': [
    '#3B3B3A', '#58585A', '#B4B4B4'],

    'image_type': 'wide',
    'images': [
    'https://chrismcnally.co.uk/assets/screens/blackheart/home.png',
    'https://chrismcnally.co.uk/assets/screens/blackheart/menu.png',
    'https://chrismcnally.co.uk/assets/screens/blackheart/videos.png'] },

  {
    'name': 'Haines Watts hwca.com',
    'desc': 'Huge multisite for top 15 accountancy firm with over 70 offices',
    'tags': [
    'wordpress', 'corporate', 'accountancy'],

    'colors': [
    '#DC002E', '#02678E', '#37454E'],

    'image_type': 'tall',
    'images': [
    'https://chrismcnally.co.uk/assets/screens/hwca/home.png',
    'https://chrismcnally.co.uk/assets/screens/hwca/office-home.png',
    'https://chrismcnally.co.uk/assets/screens/hwca/www.hwca.com_about-us_history_.png'] }] };




function ProjectImages(props) {
  return (
    React.createElement("div", { className: "project-images" },
    props.images.map((url, index) => {
      return (
        React.createElement("div", { className: "thumb" },
        React.createElement("img", { className: props.type + ' gallery-' + props.index, "data-featherlight": url, src: url })));


    })));


}

function ProjectColors(props) {
  return (
    React.createElement("div", { className: "color-scheme" },
    props.colors.map((color, index) => {
      return React.createElement("span", { style: { backgroundColor: color } });
    })));


}

function Project(props) {
  var tags = props.project_info.tags;
  var tag_list = tags.map((name, index) => {
    var fname = index === 0 ? name : ' / ' + name;
    return fname;
  });
  return (
    React.createElement("div", { className: "row" },
    React.createElement("div", { className: "col-md-4" },
    React.createElement("div", { className: "project-text" },
    React.createElement("div", null,
    tag_list),

    React.createElement("strong", null, props.project_info.name),
    React.createElement("p", null, props.project_info.desc))),


    React.createElement("div", { className: "col-md-2" },
    React.createElement(ProjectColors, { colors: props.project_info.colors })),

    React.createElement("div", { className: "col-md-6" },
    React.createElement(ProjectImages, { index: props.index, type: props.project_info.image_type, images: props.project_info.images }))));



}

function Projects(props) {
  return (
    React.createElement("div", { className: "content-wrap" },
    React.createElement("div", { className: "container" },
    React.createElement("h1", null, "Recent Projects"),
    React.createElement("hr", null),
    props.info.map(function (project, index) {
      return (
        React.createElement("div", null,
        React.createElement(Project, { index: index, project_info: project }),
        React.createElement("hr", null)));


    }))));



}

function WorkHistory(props) {
  return (
    React.createElement("div", { className: "content-wrap" },
    React.createElement("div", { className: "container" },
    React.createElement("h1", { class: "" }, "Work History"),
    React.createElement("hr", null),
    props.work.map(function (work, index) {
      return (
        React.createElement("div", { className: "work-history" },
        React.createElement("strong", null, work.title), " / ", work.location, " / ", React.createElement("strong", null, work.date),
        React.createElement("p", null, work.text),
        React.createElement("hr", null)));


    }))));



}

function Quote(props) {
  return (
    React.createElement("div", { className: "content-wrap" },
    React.createElement("div", { className: "container" },
    React.createElement("blockquote", { className: "blockquote" },
    React.createElement("p", { className: "mb-0" }, props.text)))));




}

function Header(props) {
  return (
    React.createElement("header", null,
    React.createElement("div", { className: "container" },
    React.createElement("div", { className: "row" },
    React.createElement("div", { className: "col-md-6" },
    React.createElement("div", { className: "header-left" },
    React.createElement("h1", { className: "display-4" }, info.name),
    React.createElement("h2", null, info.subtitle))),


    React.createElement("div", { className: "col-md-6" },
    React.createElement("div", { class: "float-md-right" },
    React.createElement("a", { href: "https://chrismcnally.co.uk" }, "chrismcnally.co.uk"), " / ", React.createElement("a", { href: "https://codepen.io/chrismcnally" }, "codepen.io"), " / ", React.createElement("a", { href: "https://uk.linkedin.com/in/chrismcnally1\n" }, "linkedin.com"), " /",

    React.createElement("a", { href: "https://twitter.com/ChrisMcNallyWeb" }, "twitter.com")))))));






}

ReactDOM.render(
React.createElement("div", null,
React.createElement(Header, null),
React.createElement(Quote, { text: info.bio }),
React.createElement(WorkHistory, { work: info.work_history }),
React.createElement(Projects, { info: info.projects })),

document.getElementById('app'));


// for(let i = 0; i < info.projects.length;i++){
// 	$('.gallery-'+i).featherlightGallery({
// 					gallery: {
// 						next: 'next »',
// 						previous: '« previous'
// 					},
// 					variant: 'featherlight-gallery2'
// 				});

// }