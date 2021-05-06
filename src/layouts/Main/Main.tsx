import React from "react";
import {connect} from "react-redux";
import ToastComponent from "../../components/Toast";

interface IProps {
    children: any
}

const MainLayout = (Props: IProps) => {

    return (
        <div className="mainContainer">
            <ToastComponent/>

            {Props.children}
        </div>
    );
};

const mapStateToProps = (store: any) => {
    return {

    };
};


const mapDispatchToProps = (dispatch: any) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);