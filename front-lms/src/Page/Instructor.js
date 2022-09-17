import React, { useState, useEffect } from "react";

const Instructor = () => {

    const [html, setHTML] = useState({ __html: "" });

    useEffect(() => {
        async function createMarkup() {
            let user = JSON.parse(localStorage.getItem('user-info'));
            const token = user.token
            let response = await fetch("http://127.0.0.1:8000/api/instructor-dashboard", {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': `Bearer ${token}`
                },
            });
            const backendHtmlString = await response.text()

            console.log(backendHtmlString)
            return { __html: backendHtmlString };
        }
        createMarkup().then(result => setHTML(result));
    }, []);


    return <div dangerouslySetInnerHTML={html} />;
}

export default Instructor