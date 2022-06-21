<div class="container">
    <div class="wrapper">
        <div class="welcome">
            <span style="color:blueviolet; font-weight: bold;">Welcome <?= ucfirst($username) ?>!</span>
        </div>
        <div class="logo">
            <img src="<?= WEBROOT ?>/Resources/Images/edituser.png" alt="logo">
        </div>
        <div class="text-center">
            <h4 class="mt-1 mb-4 pb-1">Dashboard</h4>
        </div>

        <?php
        if (isset($role) && $role == '1') {
        ?>
            <div class="text-center pt-1 mb-3 pb-1">
                <a href="adduser"><button class="btn btn-primary" name="submit" type="button">Add a new user</button></a>
            </div>
            <div class="text-center pt-1 mb-3 pb-1">
                <a href="allusers"><button class="btn btn-primary" name="submit" type="button">View All Users</button></a>
            </div>
        <?php
        }
        ?>
        <?php
        if (isset($role) && $role == '2') {
        ?>
            <div class="text-center pt-1 mb-3 pb-1">
                <a href="adduser"><button class="btn btn-primary" name="submit" type="button">Add a new user</button></a>
            </div>
            <div class="text-center pt-1 mb-3 pb-1">
                <a href="allusers"><button class="btn btn-primary" name="submit" type="button">2</button></a>
            </div>
        <?php
        }
        ?>
        <?php
        if (isset($role) && $role == '3') {
        ?>
            <div class="text-center pt-1 mb-3 pb-1">
                <a href="adduser"><button class="btn btn-primary" name="submit" type="button">Add a new user</button></a>
            </div>
            <div class="text-center pt-1 mb-3 pb-1">
                <a href="allusers"><button class="btn btn-primary" name="submit" type="button">3</button></a>
            </div>

        <?php
        }
        ?>
        <?php
        if (isset($role) && $role == '4') {
        ?>
            <div class="text-center pt-1 mb-3 pb-1">
                <a href="adduser"><button class="btn btn-primary" name="submit" type="button">4</button></a>
            </div>
            <div class="text-center pt-1 mb-3 pb-1">
                <a href="allusers"><button class="btn btn-primary" name="submit" type="button">4</button></a>
            </div>

        <?php
        }
        ?>
    </div>
</div>