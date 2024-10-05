import { View, Pressable, Text, Image } from 'react-native';
import PagerView from "react-native-pager-view" 


export  function Banner() {
 return (
   <View className='w-full h-36 md:h-60 rounded-2xl mt-5 mb-4'>

    <PagerView style={{ flex:1 }} initialPage={0} pageMargin={14}>

        <Pressable className='w-full h-36 md:h-60 round-2xl' key="1" onPress={() => console.log("Clicou no Banner 1")}>

          <Image 
          source={require('../../../assets/images/banner/01.png')} 
          className='w-full h-36 md:h-60 rounded-2xl' />

        </Pressable>


        <Pressable className='w-full h-36 md:h-60 round-2xl' key="2" onPress={() => console.log("Clicou no Banner 2")}>

        <Image 
          source={require('../../../assets/images/banner/02.png')} 
          className='w-full h-36 md:h-60 rounded-2xl' />

        </Pressable>

    </PagerView>

   </View>
  );
}