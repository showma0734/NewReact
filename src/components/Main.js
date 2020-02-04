import React from 'react';
import People from './People';

class Main extends React.Component{
    render(){
  
      const peopleList = [
        {
          name: "外川",
          introduction: "フロアー"
        },
        {
          name: "石井",
          introduction: "フロアー"
        },
        {
          name: "石坂",
          introduction: "フロアー"
        },
        {
          name: "木村",
          introduction: "RS"
        }
      ]
  
  
      return (
        <div className="main-wrapper">
            <div className="main">
                <div className="copy-container">
                    <h1>Hello,World.</h1>
                    <h2>ジョナサンのメンバーを紹介します。</h2>
                </div>
                <div className="people-container">
                  <h3>人物一覧</h3>
                  {peopleList.map((peopleItem) => {
                      return(
                          <People
                          name = {peopleItem.name}
                          introduction = {peopleItem.introduction}
                          />
                        );
                   })}
                </div>
            </div>
        </div>  
      );
    }
  }

export default Main;
  