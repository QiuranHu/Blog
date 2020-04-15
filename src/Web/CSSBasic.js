import React, { Component } from 'react';

class CSSBasic extends Component {
    render() {
        return (
            <div className="col-12 col-lg-10 ml-auto mainContent">
                <div className="container mt-3">
                    <div className="center">
                        <h2>CSS Basics</h2>
                    </div>
                    <h4>1. Cascade</h4>
                    <p>Cascade is used to dealing with conflicting declarations in CSS.</p>
                    <p>First step is to compare the <span className="textWithRedUnderline">stylesheet origins</span> of these conflicting declarations.
                        Styles wrote by programmers have a higher priority than the browser's default styles.
                        If they are from <span className="TextBorderGray">different</span> origins, we use declaration with higher priority origin.
                        If they are from <span className="TextBorderGray">same</span> origins, we go to second step.
                    </p>
                    <p>
                        In the second step, we are going to examine that is one of they an <span className="textWithRedUnderline">inline</span> style. If <span className="">so</span>, use the inline declaration. If <span className="">not</span>, go to next step.
                    </p>
                    <p>
                        Third step is: Do selectors have different <span className="textWithRedUnderline">specificity</span>? Selector specificity means which selector take precedence. If we specify something by id
                        instead of class, it is more specific, then it has a higher specificity. If selectors have <span className="">different</span> specificity, use declaration with higher specificity.
                        If <span className="">not</span>, go to next step.
                    </p>
                    <p>
                        The last step is very easy. We use the declaration that comes <span className="textWithRedUnderline">later</span> in source code.
                    </p>
                    <h4>2. Specificity</h4>
                    <p>ID selector > class selector > tag selector.</p>

                    <h4>3. rem, px and em</h4>
                    <p>em is the most common relative length unit. 1em means the font size of the current element. An em on the root element is relative to the browser's default font size, which is 16px.
                    Technically, it's the keyword value medium that calculates to 16px;
                    </p>
                    <p>rem is short for root em. rem is relative to the font size of the root.</p>
                    <p>Use rems for font sizes, use px for borders and use ems for others. But this is not strictly required.</p>
                    <h4>4. Box model</h4>
                    <p>1. Width and height specifies the width and height of the content area.</p>
                    <p>2. Padding specifies the amount of space between the content area and the border.</p>
                    <p>3. Border specifies the thickness and style of the border surrounding the content area and padding. </p>
                    <p>4. Margin specifies the amount of space between border and the outside edge of the element. </p>
                </div>
            </div>
        )
    }
}

export default CSSBasic;