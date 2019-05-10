import React, {Component} from 'react';
import { View,ScrollView } from 'react-native';
import EmployeeDetail from './src/components/EmployeeDetail';
import data from './src/components/data.json';
import Header from './src/components/Header';

export default class App extends Component {
  state={ 
   data   
};

renderAlbums(){
  return this.state.data.map(data => <EmployeeDetail props={data} />);
}

  render() {
    return (
      <View style={{ flex:1}}>
        <Header headerText={"Employee List"} />
           <ScrollView>
                {this.renderAlbums()} 
            </ScrollView>
      </View>
    );
  }
}