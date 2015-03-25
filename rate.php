<?php
	for($i=1;$i<=10;$i++)
	{
		if($i <= $_POST['rate-1'])
			$class="done";
		else
		if($i <= $_POST['rate-2'])
			$class="done";
			else
		if($i <= $_POST['rate-3'])
			$class="done";
			else
		if($i <= $_POST['rate-4'])
			$class="done";
		else
			$class="fade";
	?>
		<a href="#" class="<?php echo $class ?> voted">Rated</span>
	<?php
	}
?>