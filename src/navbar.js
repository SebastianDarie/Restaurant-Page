const navbar = (content) => {
    content.innerHTML = `
        <nav class="nav">
            <div>
                <h1><span class="primary">Hawaiian</span>Wave</h1>
            </div>

            <ul>
                <li class="tabs">Home</li>
                <li class="tabs">Menu</li>
                <li class="tabs">Contact</li>
            </ul>
        </nav>
    `
}

export default navbar