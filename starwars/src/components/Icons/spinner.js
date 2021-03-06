import React, { Component }  from 'react';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: grey;
`;

class AwesomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        return (
            <div className="sweet-loading">
                <ClipLoader
                    css={override}
                    size={15}
                    color={"#123abc"}
                    loading={this.state.loading}
                />
            </div>
        );
    }
}

export default AwesomeComponent