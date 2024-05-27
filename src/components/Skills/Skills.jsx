import React from 'react'
import  './Skills.css'
import vis from '../../assets/infographic.png'
import app from '../../assets/restaurant-app.png'
import web from '../../assets/edit.png'

const Skills = () => {
  return (
    <section id='skills'>
          <span className="skillTitle">What I do</span>
          <span className="skillDesc">I am a skilled web developer with exdperience in creating web and <br />visually appearling and user-friendly websites.</span>

          <div className="skillBars">
              <div className="skillBar">
                  <img src={vis} alt="Vis" className="skillBarImg" />
                  <div className="skillBarText">
                      <h2>Data Visualization</h2>
                      <p>This is a demo text, you can write your own content here</p>
                  </div>
              </div>
          </div>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={web} alt="web" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Development</h2>
                        <p>This is a demo text, you can write your own content here</p>
                    </div>
                </div>
            </div>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={app} alt="app" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Development</h2>
                        <p>This is a demo text, you can write your own content here</p>
                    </div>
                </div>
            </div>
        
    </section>
  )
}

export default Skills