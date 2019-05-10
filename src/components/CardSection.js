import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
return (
        <View style={styles.containerStyle}>
           {props.children}
       </View>
    );
};

const styles = {
    containerStyle: {
        flexDirection: 'row',
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: '#fff',
        borderRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginBottom:5
    }
};



       
       
       
       
      
        


export default CardSection;
