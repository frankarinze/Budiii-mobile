import colors from './colors';

// utility styles
// /////////////////////////////////////////////////////////////////////////////
export default {
  btn: {
    alignItems: 'center',
    backgroundColor: colors.brandPrimary,
    borderColor: colors.brandPrimary,
    borderWidth: 1,
    borderRadius: 4,
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 8
  },
  btnText: {
    color: colors.white,
    textAlign: 'center'
  },
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  containerMiddleJustify: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  blackBG: {
    backgroundColor: colors.black,
    flex: 1
  },
  whiteBG: {
    backgroundColor: colors.white,
    flex: 1
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 32
  },

  paddedContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  activeO: 0.8,
  activeOFull: 1,
  spacer80: {
    height: 80,
    width: '100%'
  },
  text: {
    color: colors.brandPrimary
  },
    // font sizes
    h1:{
      fontSize:39,
      fontFamily: 'worksans-regular'
    } ,
    h2: {
      fontSize:29,
      fontFamily: 'worksans-regular'
    },
    h3: {
      fontSize:24,
      fontFamily: 'worksans-regular'
    },
    h4: {
      fontSize:19,
      fontFamily: 'worksans-regular'
    },
    caption: {
      fontSize:12,
      fontFamily: 'worksans-regular'
    },
    small: {
      fontSize:8,
      fontFamily: 'worksans-regular'
    },
  // /font sizes
  bold: {
    fontWeight: 'bold'
  },
  xbold:{
    fontWeight:"700"
  },
  underline: {
    textDecorationLine: 'underline',
  },

  //frank's side
  textHeaderOne: {
    color: colors.black,
    fontSize: 24,
    lineHeight: 40,
    letterSpacing: -0.8,
    fontFamily: 'worksans-semibold'
  },

  subTitle: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontFamily: 'worksans-regular'
  },

  user_img:{ 
    height: 70, 
    width: 70,
    marginBottom: 6,
    marginTop: 5,
    resizeMode: 'cover' ,
    borderRadius: 35, 
    borderColor:colors.brandPrimary,
    borderWidth:3,
   },

   users_container:{
    width:75,
    alignItems:"center",
    margin:2,
   },

   list_container:{
    flexDirection:"row"
   },

   alignHorizontal:{
    flexDirection:"row"
   },

   logoSize:{
     height:  28.31,
     width:83.26,
   },
   ModalContainer:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'rgba(0,0,0,0.5)'
 },
    ModalContent:{
     position: "absolute",
     left: "23%",
     marginLeft: -50,
     top: "33%",
     marginTop: -50,
     alignSelf:"center",
     alignItems:"center",
     height:250,width:320,backgroundColor:"white",
     shadowColor: "black",
     shadowOpacity: 0.11,
     shadowOffset: { width: 0, height: 2 },
     shadowRadius: 8,
     borderRadius:5
 },
   /** /frank's side **/ 
  flexOne:{
    flex:1
  },

  forgotPassword : {
    color: colors.forgotBlack,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 16,
    marginBottom: 29,
    width: '100%',
    textAlign: 'right'
  },
  noAccount : {
    color: colors.forgotBlack,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 17,
    marginBottom: 29,
    width: '100%',
    textAlign: 'center'
  },
  loginButton : {
    width: '100%',
    height: 50,
    backgroundColor: colors.brandPrimary,
    borderColor: colors.brandPrimary,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginTop: 52,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 500,
  },

  // Authentication Form
  authInputText : {
    height: 48,
    width: '100%',
    marginLeft: 16,
    marginRight: 16,
    borderWidth: 2,
    borderRadius: 4,
    paddingLeft: 19,
    paddingTop: 0,
    color: colors.inputText,
    borderColor: colors.inputGrey,
    fontSize: 16,
    lineHeight: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1 ,
    shadowRadius: 4,
    elevation: 1,
    fontFamily: 'worksans-medium',
  },
   // Verify Form
  verifyTextInput : {
    height: 48,
    width: 48,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1.5,
    borderRadius: 4,
    paddingLeft: 19,
    paddingTop: 0,
    color: colors.inputText,
    borderColor: colors.inputGrey,
    fontSize: 16,
    lineHeight: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1 ,
    shadowRadius: 4,
    elevation: 1,
    fontFamily: 'worksans-medium',
  }
};