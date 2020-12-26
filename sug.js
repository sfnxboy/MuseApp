import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I {isHungry ? "want suggestions" : " thank you "}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "drop suggestion" : "Thank you!"}
      />
    </View>
  );
}

//main
const Cafe = () => {
  return (
    <>
      <Cat name="Lusy" />
      <Cat name="Work" />
      <Cat name = "rih" />
    </>
  );
}

export default Cafe;