/**
 * Created by Briana on 11/28/15.
 */
var RSVP = React.createClass({
    componentDidMount: function(){
        $('form').on('submit',  function(){
            var data = $(this).serialize();
            $.ajax({
                url: "/api/johnRoutes",
                method: "post",
                dataType: "JSON",
                data: data
            }).done(function(data){
                console.log(data);
                $('.success').html("<br>Your RSVP has successfully been submitted. If you need to make changes, please contact Briana or Chris.")
            });
            return false;
        });

    },
    render: function(){
        return(
            <form className="cmxform" id="mgform">
        <div className="form-group">
            <h1>John's Info</h1>
            <label htmlFor = "mail" >John's Email </label>
            <input name="email" id = "mail" className="form-control" type="email" required/>
        </div>
        <div className="form-group">
            <h1>Location</h1>
            <label htmlFor = "location" > Location </label>
        <input name="location" id = "location" className="form-control" type="text" required/>
        </div>
        <div className="form-group">
                <h1>Costs</h1>
            <label htmlFor = "costRent" > Rent </label>
            <input name="costRent" id = "costRent" className="form-control" type="text" required/>
        </div>
        <div className="form-group">
            <label htmlFor = "util" > Utilities paid by tenent</label>
            <input name="util" id = "util" className="form-control" type="text" required/>
        </div>
        <div className="form-group">
            <label htmlFor = "costUtil" > Average utility cost </label>
            <input name="costUtil" id = "costUtil" className="form-control" type="text" required/>
        </div>
        <div className="form-group">
            <h1>Amenities</h1>
            <label htmlFor = "park" > Parking </label>
            <input name="park" id = "park" className="form-control" type="text" required/>
        </div>
        <div className="form-group">
            <label htmlFor = "internet" > Internet speed & cost</label>
        <input name="internet" id = "internet" className="form-control" type="text" required/>
        </div>
        <div className="form-group">
            <label htmlFor = "security" > Security, such as locked entry at main enterance </label>
        <input name="security" id = "security" className="form-control" type="text" required/>
        </div>
        <div className="form-group">
            <label htmlFor = "laundry" > Laundry </label>
        <input name="laundry" id = "laundry" className="form-control" type="text" required/>
        </div>
        <div className="form-group">
            <h1>Culture</h1>
            <label htmlFor = "noise" > Noise Policy </label>
        <input name="noise" id = "noise" className="form-control" type="text" required/>
        </div>
        <div className="form-group">
            <label htmlFor = "crime" > Crime report in building and surrounding area </label>
        <input name="crime" id = "crime" className="form-control" type="text" required/>
        </div>
        <div className="form-group">
            <label htmlFor = "maint" > Maintenance requests </label>
        <input name="maint" id = "maint" className="form-control" type="text" required/>
        </div>
        <div className="form-group">
            <label htmlFor = "inspect" > Frequency of building inspection for bugs, rodents, etc. </label>
        <input name="inspect" id = "inspect" className="form-control" type="text" required/>
        </div>
            <div>
            <input type ="submit" value = "Submit" className="btn btn-primary" onclick="mgform.hid=this.value"/>
            </div>
            <div className="success">
            </div>
            </form>
        );
    }
});



React.render(<RSVP data = {[]} />, document.getElementById('johnApp'));
