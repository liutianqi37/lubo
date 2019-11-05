import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Leave from "./routes/Leave/Leave";
import Dedication from "./routes/Dedication/Dedication";
import Login from "./routes/Login/Login";
import Registration from "./routes/Registration/Registration";
import Prayer from "./routes/Prayer/Prayer";
import Vote from "./routes/Vote/Vote";
import Dynamic from "./routes/Dynamic/Dynamic";
import Fabu from "./routes/Dynamic/fabu";
import Gifts from "./routes/Gifts/Gifts";
import Details from "./routes/Details/Details";
import PushVote from "./routes/PushVote/PushVote";
import ToVoteDetail from "./routes/ToVoteDetail/ToVoteDetail";
import My from "./routes/My/My";
import Group from "./routes/Group/Group";
import GiftList from "./routes/Gifts/GiftList";
import MyVote from "./routes/MyVote/MyVote";
import Members from "./routes/Members/Members";
import GroupList from "./routes/groupList/GroupList";
import Settings from "./routes/Seetings/Seetings";
import Goshop from "./routes/Goshop/Goshop";
import Ledel from "./routes/Leave/Ledel";
import Look from "./routes/Group/Look";
import Mygroup from "./routes/Group/Mygroup";
import Gdetail from "./routes/Group/Gdetail";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/IndexPage" exact component={IndexPage} />
        <Route path="/leave" exact component={Leave} />
        <Route path="/Ledel" exact component={Ledel} />
        <Route path="/login" exact component={Login} />
        <Route path="/registration" exact component={Registration} />
        <Route path="/prayer" exact component={Prayer} />
        <Route path="/dedication" exact component={Dedication} />
        <Route path="/vote" exact component={Vote} />
        <Route path="/dynamic" exact component={Dynamic} />
        <Route path="/fabu" exact component={Fabu} />
        <Route path="/gifts" exact component={Gifts} />
        <Route path="/details" exact component={Details} />
        <Route path="/toVoteDetail" exact component={ToVoteDetail} />
        <Route path="/pushVote" exact component={PushVote} />
        <Route path="/my" exact component={My} />
        <Route path="/group" exact component={Group} />
        <Route path="/giftList" exact component={GiftList} />
        <Route path="/goshop" exact component={Goshop} />
        <Route path="/myVote" exact component={MyVote} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/members" exact component={Members} />
        <Route path="/groupList" exact component={GroupList} />
        <Route path="/group" exact component={Group} />
        <Route path="/look" exact component={Look} />
        <Route path="/mygroup" exact component={Mygroup} />
        <Route path="/gdetail" exact component={Gdetail} />

        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
