const navbar = (content) => {
    content.innerHTML = `
        <nav class="nav">
            <div>
                <h1><span class="primary">Hawaiian</span>Wave</h1>
            </div>

            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Contact</li>
            </ul>
        </nav>
    `
}

export default navbar