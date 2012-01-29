function writeHead(){
document.write("             <!--  Mobile viewport optimized: j.mp\/bplateviewport -->");
document.write("            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\" \/>            ");
document.write("            ");
document.write("            <!-- StyleSheets under here -->");
document.write("            <link rel=\"stylesheet\" href=\"http:\/\/code.jquery.com\/mobile\/1.0\/jquery.mobile-1.0.min.css\" \/>");
document.write("            <link href=\"http:\/\/fonts.googleapis.com\/css?family=Lobster+Two:700\" rel=\"stylesheet\" type=\"text\/css\" \/>");
document.write("            <link rel=\"stylesheet\" href=\"css\/style.css\" \/>");
document.write("            ");
document.write("            <!-- JavaScript is normally at the end of the body, except for Modernizer which enables HTML5 elements & feature detects -->");
document.write("            <script src=\"js\/modernizr.custom.min.js\"><\/script>");
document.write("            ");
document.write("			<!-- JavaScript is normally at the end of the body, but we'll keep Phonegap up here too -->");
document.write("            <script type=\"text\/javascript\" charset=\"utf-8\" src=\"js\/phonegap-1.3.0.js\"><\/script>");
document.write("            ");
document.write("			<!-- Here we begin loading Phonegap functions, they are name accordingly. acccelerometer, geolocation, etc -->");
document.write("			<script type=\"text\/javascript\" charset=\"utf-8\" src=\"js\/accelerometer.js\"><\/script>");
document.write("			<script type=\"text\/javascript\" charset=\"utf-8\" src=\"js\/geolocation.js\"><\/script>");
document.write("			<script type=\"text\/javascript\" charset=\"utf-8\" src=\"js\/beepnotification.js\"><\/script>");
document.write("			<script type=\"text\/javascript\" charset=\"utf-8\" src=\"js\/deviceinfo.js\"><\/script>");
document.write("			<script type=\"text\/javascript\" charset=\"utf-8\" src=\"js\/checknetwork.js\"><\/script>");
document.write("			<script type=\"text\/javascript\" charset=\"utf-8\" src=\"js\/playaudio.js\"><\/script>");
}

function writeSectionHeader(){
    document.write("            <header data-role=\"header\">");
    document.write("                <h1>As Done by Carolyn<\/h1>");
    document.write("                <nav data-role=\"navbar\">");
    document.write("                    <ul>");
    document.write("                        <li><a href=\"#page1\" data-transition=\"pop\" data-theme=\"e\">Home<\/a><\/li>");
    document.write("                        <li><a href=\"#page2\" data-transition=\"pop\" data-theme=\"e\">Demos<\/a><\/li>");
    document.write("                        <li><a href=\"#page4\" data-transition=\"pop\" data-theme=\"e\">Research<\/a><\/li>");
    document.write("                        <li><a href=\"#page5\" data-transition=\"pop\" data-theme=\"e\">About<\/a><\/li>");
    document.write("                    <\/ul>");
    document.write("                <\/nav>");
    document.write("            <\/header>          ");
}

function writeSectionFooter(){
    document.write("<footer data-role=\"footer\" data-position=\"fixed\"><center><p>Carolyn Lea AVF1201<\/p><\/center><\/footer>");
}

