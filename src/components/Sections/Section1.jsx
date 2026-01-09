import React, { useState } from 'react'

const Section1 = () => {

    const [text, setText] = useState("Hello World")

    return (
        <div className='section1'>
            <div className='landpage'>
                
                <div className='landpage-data'>
                    <p className='sub-titel'>I am Karan Swarnakar,</p>
                    <p className="highlight-data">
                        I build complete web solutions by combining strong backend logic with clean, modern frontend design. From creating secure APIs to crafting smooth user experiences, I focus on building products that are
                        <span className="shine-text shine-blue"> reliable, scalable, and easy to maintain</span>.
                    </p>

                    <p>
                        I develop full-stack experiences where powerful backend systems meet smooth, user-friendly interfaces — delivering
                        <span className="shine-text shine-pink"> fast, secure, and high-performance</span> web applications.
                    </p>



                </div>
            </div>
            <div className='code-data'>
                <div class="code-card code-card--dark">
                    <div class="code-card__header">
                        <div class="code-card__traffic">
                            <span class="dot dot--red"></span>
                            <span class="dot dot--yellow"></span>
                            <span class="dot dot--green"></span>
                        </div>
                        <span class="code-card__title">index.html</span>
                    </div>

                    <div class="code-card__body">
                        <p class="code-line">
                            <span class="tag">&lt;script&gt;</span>
                        </p>
                        <p class="code-line indent-1">
                            <span className='js-code'>console.log(<span class="tag">"{text}"</span>);</span>
                            {/* <span class="highlight">Ticket Sales</span> */}

                        </p>
                        <p class="code-line">
                            <span class="tag">&lt;/script&gt;</span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section1
