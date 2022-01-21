const Component = (props) => {
    // Change Theme
    const changeTheme = () => {
        var style = document.querySelector('link[rel="newest stylesheet"]');

        let current = style.getAttribute("href");
        if (current === "/css/LightTheme.css") {
            // Change to Dark Mode
            style.setAttribute("href", "/css/DarkTheme.css");
            changeMetaTheme(1);
        } else if (current === "/css/DarkTheme.css") {
            // Change to Light Mode
            style.setAttribute("href", "/css/LightTheme.css");
            changeMetaTheme(0);
        }
    };

    // Change Chrome Meta Theme
    const changeMetaTheme = (mode) => {
        if (mode === 0) document.querySelector('meta[name="theme-color"]').content = "#fff";
        else if (mode === 1) document.querySelector('meta[name="theme-color"]').content = "#111";
    };

    return (
        <span onClick={() => changeTheme()}>
            <i className="fas fa-adjust mode-dial"></i>
        </span>
    );
};

export default Component;
