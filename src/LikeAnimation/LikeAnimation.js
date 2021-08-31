import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

const LikeAnimation = () => {
  const [isLiked, setIsLiked] = React.useState(false);

  const likeAnimation = React.useRef();
  const onLikeBtnPressed = () => {
    setIsLiked(!isLiked);
  };

  React.useEffect(() => {
    if (isLiked) {
      // Like Animation liked state is at 66 frame
      likeAnimation.current.play(19, 50);
    } else {
      // Like Animation normal state is at 19 frame
      likeAnimation.current.play(0, 19);
    }
  }, [isLiked]);

  return (
    <View style={styles.likeBtn}>
      <TouchableOpacity onPress={onLikeBtnPressed}>
        <LottieView
          ref={likeAnimation}
          style={styles.heartLottie}
          source={require('../../assets/lottie/like.json')}
          // we want to control this explicitly
          autoPlay={false}
          loop={false}
        />
      </TouchableOpacity>
    </View>
  );
};

const HEART_SIZE = 50;

const styles = StyleSheet.create({
  likeBtn: {},
  heartLottie: { width: 50, height: 50 },
});

export { LikeAnimation };
