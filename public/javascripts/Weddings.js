var RSVP = React.createClass({
    componentDidMount: function(){
      $('form').on('submit',  function(){
          var data = $(this).serialize();
          $.ajax({
              url: "/api/weddingguests",
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
            <form>
                <div className="form-group">
                    <label> Name
                        <input name = "name" className="form-control" />
                    </label>
                </div>
                <div className="form-group">
                    <label> Email
                        <input name = "email" className="form-control"/>
                    </label>
                </div>    
                <div className="form-group">
                    <label> RSVP
                        <div className="radio">
                            <label>
                                <input type="radio" name="rsvpRadio" id="Yes" value={true} defaultChecked />
                                Yes, we can attend! Yay!
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="rsvpRadio" id="No" value={false} /> Sadly, we cannot attend. :(
                            </label>
                        </div>
                    </label>
                </div>
                <div className="form-group">
                    <label>Number of Adults (Ages 13+)</label>
                    <input name = "numOfGuestsOver13" className="form-control" />
                </div>
                 <div className="form-group">
                    <label>Number of Children (Ages 12 and under, but don't worry about including a count for babies</label>
                    <input name = "numOfGuestsUnder13" className="form-control" />
                </div>
                <div className="form-group">
                    <label> Do you have a favorite song to dance to at wedding receptions?
                    <input name = "favSong" className="form-control"/>
                    </label>
                </div>
                <div>
                    <input type ="submit" className="btn btn-primary"/>
                </div>
                <div className="success">
                </div>
            </form>
        );
    }
});

React.render(<RSVP data = {[]} />, document.getElementById('mount'));