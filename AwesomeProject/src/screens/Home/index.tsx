import React, { useState} from 'react';
import { View } from "react-native";

import { CategorySelect } from '../../components/CategorySelect';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from "../../components/Profile";

import { styles } from './styles';

export function Home () {
    const [ category, setCategory] = useState ('');
function handleCategorySelect(categoryID: string) {
    categoryID === category ? setCategory ('') : setCategory (categoryID);

}

    return (
        <View>
     <View style={styles.header} >
         <Profile />
         <ButtonAdd />
</View>
<View>
      <CategorySelect 
      categorySelected={category}
      setCategory={ handleCategorySelect}

      />

         </View>
        </View>

    );
}