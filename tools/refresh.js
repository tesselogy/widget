/**
 * Created by ELEMIAN on 07.06.2019.
 */
var oAuth2 = require("../tools/0Auth");
    var scope = [
        'data:read',
        'data:write',
        'data:create'
    ];
    var credentials = {"access_token":"eyJhbGciOiJIUzI1NiIsImtpZCI6Imp3dF9zeW1tZXRyaWNfa2V5In0.eyJ1c2VyaWQiOiJLRDg2UENFNkE1TUciLCJleHAiOjE1NTk5MjQ3NzYsInNjb3BlIjpbInVzZXItcHJvZmlsZTpyZWFkIiwiZGF0YTp3cml0ZSIsImRhdGE6Y3JlYXRlIiwiZGF0YTpzZWFyY2giLCJkYXRhOnJlYWQiLCJidWNrZXQ6cmVhZCIsImJ1Y2tldDp1cGRhdGUiLCJidWNrZXQ6Y3JlYXRlIiwiYnVja2V0OmRlbGV0ZSIsImNvZGU6YWxsIiwiYWNjb3VudDpyZWFkIiwiYWNjb3VudDp3cml0ZSIsInZpZXdhYmxlczpyZWFkIl0sImNsaWVudF9pZCI6IkQyZExlWUFHczU2MnBqbUVYRnZBSXExMHFpdUxWUjYzIiwiZ3JhbnRfaWQiOiJuV1hVMGl2NXhQN01ZYzJhZjNRUHJ4MUhGNUtiQXVGZyIsImF1ZCI6Imh0dHBzOi8vYXV0b2Rlc2suY29tL2F1ZC9qd3RleHA2MCIsImp0aSI6ImNBczNRS0xrMVp1eFFvS29GaG9wTE9FNk84aDlVYVhEaHFlM1VDUUg1VHRmd1dCTXpqYlMyZ0dqOFZlSkZiUkYifQ.Z33eQkx0EEb4iQUefbumFD6SDl0xyppFmqtedgusMEE","refresh_token":"HvMtTsQC8KgOrMcyenCzgrrvonNQCrWtTuaGtvXUNb","token_type":"Bearer","expires_in":3599,"expires_at":"2019-06-07T16:26:15.769Z"};
    oAuth2.oAuth2ThreeLegged.refreshToken(credentials,scope);
