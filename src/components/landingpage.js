import React , { Component } from 'react';
import {Icon,Card,CardText,CardTitle,CardActions,Button,CardMenu} from 'react-mdl';



class LandingPage extends Component{
    render(){
        return(
            <div style={{ display:'inline-block'}}>
                <Card shadow={0} style={{width: '285px', height: '290px', background: '#3E4EB8',display:'inline-block',margin:'26px 44px'}}>
    <CardTitle expand style={{alignItems: 'flex-start', color: '#fff'}}>
        <h4 style={{marginTop: '0'}}>
            Featured event:<br />
            June 21, 2019<br /><br />
            <b>hackathon</b><br /><br />
            11-3pm
        </h4>
    </CardTitle>
    <CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff'}}>
        <Button colored style={{color: '#fff'}}>Add to Calendar</Button>
        <div className="mdl-layout-spacer"></div>
        <Icon name="event" />
    </CardActions>
</Card>
            <Card shadow={0} style={{width: '512px',height:'283px', margin: '29px 55px',display:'inline-block'}}>
                <CardTitle style={{color: '#fff', height: '135px', background: 'url(https://scontent.fktm6-1.fna.fbcdn.net/v/t1.0-9/59553752_1173547789493135_4305300501982871552_n.jpg?_nc_cat=102&_nc_ht=scontent.fktm6-1.fna&oh=5d340e98a19907fbe215f18091d2b193&oe=5D8C729B) center / cover'}}>OYD</CardTitle>
                <CardText>
                    OYD is the inovative software company working for betterment and advancement in technology. Its uses especially in web technology. OYD work in django, react , node js.
                </CardText>
  
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>
            </Card>
            <Card shadow={0} style={{width: '285px',height:'287px', margin: '22px -12px',display:'inline-block'}}>
                <CardTitle style={{color: '#fff', height: '135px', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>OYD</CardTitle>
                <CardText>
                    OYD is the inovative software company working for betterment and advancement in technology. Its uses especially in web technology. OYD work in django, react , node js.
                </CardText>
  
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>
            </Card>
  
            </div>



        );
    }
}

export default LandingPage;