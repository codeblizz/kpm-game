

const utils = {
    extraPropsMapper: (infoMsg: { msg: any }) => {
        return {
          backgroundColor: 'bg-white',
          titleColor: infoMsg.msg ? `bg-[#008000]` : `bg-[#ff0000]`,
          descriptionColor: infoMsg.msg ? `bg-[#008000]` : `bg-[#ff0000]`,
          buttonBGColor: infoMsg.msg ? 'bg-black' : `bg-black`,
        };
      },
};

export default utils;
