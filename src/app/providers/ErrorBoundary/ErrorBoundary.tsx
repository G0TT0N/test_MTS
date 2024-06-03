import {Component, ErrorInfo, ReactNode} from "react";

export class ErrorBoundary extends Component<{children?: ReactNode}> {
  state = {hasError: false};

  static getDerivedStateFromError(error: Error) {
    console.log("!LOG! error ===>", error);

    return {hasError: true};
  }

  componentDidCatch(error: Error, trace: ErrorInfo) {
    // send error to api
  }

  render() {
    const {hasError} = this.state;

    if (hasError) {
      return (
        <div className='errorBoundary'>
          <p>Oops!</p>
          <a href='/'>Return to Home</a>
        </div>
      );
    }

    return this.props.children;
  }
}
