module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define("User",{
        firstName:{
            type:DataTypes.STRING
        },
        LastName:{
            type:DataTypes.STRING
        }
    });

    return User;
}