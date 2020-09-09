import React, { Component } from 'react'

export class TableData extends Component {
    render() {
        return (
            <div>
                <div className="tips">
                        <p>Health Tips</p>
                        <img src="image/tips.jpg" alt="smiley face" width={195} height="130px" />
                    </div>

                    <div className="tips">
                        <p>News &amp; Updates</p>
                        <img src="image/update.jpg" alt="virus" width={195} height="130px" />
                    </div>
                    <div className="letter">
                        <p>Subscribe to our newsletter</p>
                        <img src="image/newsletter.jpg" alt="newsletter spelt" width={195} height="128px" />
                        <button className="bd">Subscribe</button>
                    </div>
            </div>
        )
    }
}

export default TableData
