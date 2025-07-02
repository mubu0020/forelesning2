import React from "react";
import ReactDOM from "react-dom/client";



const root = ReactDOM.createRoot(document.getElementById("root"));

function FrontPage(){
    return (
        <>
            <h2>Welcome</h2>
            <a href={"#"}>Ask a question</a>
        </>
    );
}

function Application() {
    return (
     <>
        <header>
            <h1>The Quiz App</h1>
        </header>
         <nav>
             <a href={""}>Front Page</a>
         </nav>
         <main>
             <FrontPage />
         </main>
         <footer>
             Created by Mustafa
         </footer>
     </>
    );
}

root.render(<Application />)