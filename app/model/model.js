var mongoose = require ("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({

	Skillset: String,
    BS_Degree:String,
    MS_Degree:String,
    Phd_Degree:String,
    Status:String,
    Prefferd_Name:String,
    First_Name:String,
    Last_Name:String,
    Email:String,
    Phone_Number:Number,
    Location:String,
    Keywords:String,
    Typical_Project_Role:String,
    Project_Reports_Completed:Number,
    Awards:String,
    Podio_App_Item_ID:Number,
    Created_Date:String,
    Created_By:String,
    BS_University:String,
    Phd_University:String,
    PhD_Field:String,
    Country:String,
    Timezone:String,
    MS_University:String,
    LinkedIn:String,
    University:String,
    Primary_Specialization:String,
    Checklist:String,
    MS_Field:String,
    Notes:String,
    Nickname:String,
    Department:String,
    Busy_Until:String,
    Num_Team_Lead_Projects:String,
    Team_Leader_Rating_Calculated:String
});

module.exports = mongoose.model("user",userSchema);



