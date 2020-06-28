import React, {Component} from "react";

class JavaScriptBasic extends Component {
    render() {
        return (
            <div className="mainContent">
                <div className="container">
                    <div className="center">
                        <p>This is an article about JavaScript.</p>
                    </div>
                    <div className="article-content">
                    <h2>JavaScript Basics</h2>
                    <h4>1. Seven fundamental data types</h4>
                    <p>First 6 of them are primitive types.</p>
                    <p>1. <span className="textWithBackground">Number</span>: Any number, including numbers with decimals: 4, 8, 23.42.</p>
                    <p>2. <span className="textWithBackground">String</span>: '...', "...". </p>
                    <p>3. <span className="textWithBackground">Boolean</span>: true or false. </p>
                    <p>4. <span className="textWithBackground">Null</span>: This data type represents the intentional 
                    absence of a value, and is represented by the keyword null.</p>
                    <p>5. <span className="textWithBackground">Undefined</span>: This data type is denoted by the 
                    keyword undefined. </p>
                    <p>6. <span className="textWithBackground">Symbol</span>: A newer feature to the language, symbols are uniques identifiers, useful in more 
                        complex coding.
                    </p>
                    <p>7. <span className="textWithBackground">Object</span>: Collection of related data. </p>
                    <h4>2. length</h4>
                    <p>Every String has a <span className="">length</span> property that specifies how many characters it has.</p>
                    <h4>3. <span className="">trim</span> method of String</h4>
                    <p>Remove the whitespace at the begining and end of the string.</p>
                    <h4>4. Some function about numbers.</h4>
                    <p><span className="textWithBackground">Math.floor(number)</span> returns the largest integer smaller
                    than or equal to the number.</p>
                    <p><span className="textWithBackground">Math.ceil(number)</span> returns the smallest integer greater
                    than or equal to the number.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default JavaScriptBasic;