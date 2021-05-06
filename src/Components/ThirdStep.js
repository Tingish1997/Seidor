import React from 'react'

export default class ThirdStep extends React.Component {
   //Setup loading page while user waiting for fetching the data 
    state = {
        loading: true,
        success: null
      };
    
      async componentDidMount() {
        const url = "http://www.mocky.io/v2/5e3d41272d00003f7ed95c09";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ success: data, loading: false });
        console.log(data);//display the data in concole
      };   
      

      render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        }
    
        if (!this.state.success) {
          return <div>Error</div>;
        }

        return (
            <div>
                <img src='/img/03.PNG' alt=''/>
                <h1>{this.state.success.title}</h1>
                <p>{this.state.success.text}</p>
            </div>
        );
    }
}
