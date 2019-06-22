import React, { Component } from 'react';
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
{
    hn{
      topStories(limit: 30, offset: 0){
        id
        title
        url
        score
        by{
          id
        }
        timeISO
        descendants
      }
    }
  }
`
class TopStories extends Component {
    formatTime(timeStr) {
        let start = new Date(timeStr);
        let end = new Date();
        let hr = Math.floor((end.getTime() - start.getTime()) / 3600000)
        if (hr >= 24) {
            let ans = Math.floor(new Date().getDate() - start.getDate())
            return ans === 1 ? ans + ' day' : ans + ' days';
        } else {
            if (hr <= 0) {
                let min = Math.floor((end.getTime() - start.getTime()) / 60000);
                if (min <= 0) {
                    let sec = Math.floor((end.getTime() - start.getTime()) / 60000);
                    return sec === 1 ? sec + ' second' : sec + ' seconds';
                }
                return min === 1 ? min + ' minute' : min + ' minutes';
            } else {
                return hr === 1 ? hr + ' hour' : hr + ' hours';
            }
        }
    };
    displayBooks() {
        let data = this.props.data;
        if (data.loading) {
            return (
                <div>loading data...</div>
            );
        } else {
            return data.hn.topStories.map(item => {
                let formattedTime = this.formatTime(item.timeISO);
                return (
                    <li key={item.id} id="list">
                        <div className="data-css">
                            <div className="first-stage1-container">
                                <div className="first-item">
                                    <span>{item.title}</span><span className="time">( {formattedTime} ago )</span>
                                </div>
                                <div className="first-stage2-container">
                                    <span className="two">
                                        {item.score} points
                                    </span>
                                    <span className="space">
                                    </span>
                                    <span className="two">
                                        by {item.by.id}
                                    </span>
                                    <span className="space">
                                    </span>
                                    <span className="one">
                                        <a href={item.url}>visit site</a>
                                    </span>
                                    <span className="space">
                                    </span>
                                </div>
                                <div className="stage-container">
                                    <button className="btn1">up vote</button>
                                    <button className="btn1">hide</button>
                                    <button className="btn1">{item.descendants === 0 ? <a href="em">discuss</a> : <a href="em">{item.descendants} comments</a>}</button>
                                </div>
                            </div>

                        </div>
                    </li>
                );
            })
        }
    }
    render() {
        return (
            <div>
                <ul id='story-list'>
                    {this.displayBooks()}
                </ul>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(TopStories);