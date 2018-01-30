import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, fetchPostsIfNeeded } from '../actions'
import BulletList from '../containers/BulletList'
import Footer from '../components/Footer'

class DayScreen extends Component {

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <h1>LaterBase</h1>
            <p>When you're about to start any task that's not on <strong>Essentials</strong>, enter that task in <strong>LaterBase</strong>.</p>
            <p>Hit <strong>'I have sinned'</strong> if you got distracted.</p>
          </div>
        </div>
        <div className="row">
          <div className="six columns bulletlist">
            <BulletList 
              theTitle="Todo Today" 
              listName="todos"
            />
          </div>
          <div className="six columns columns bulletlist laterbase">
              <BulletList 
                theTitle="The LaterBase o" 
                listName="theLaterbase"
              />
          </div>
        </div>
        <div className="row sin-bin">
          <div className="six columns bulletlist">
            <BulletList 
              theTitle="Sin Bin" 
              listName="postProcrastination"
            />
          </div>
          <div className="six columns bulletlist">
            <p className="advice">Be sure to enter your sins whenever they happen so that proper stats about your productivity can be compiled.</p>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default DayScreen
