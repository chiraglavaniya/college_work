<!DOCTYPE html>
<html>
<body>
    <script>
        const input = prompt("Enter your age:");
        const age = Number(input);
        const msg = !input || !Number.isInteger(age) || age < 0
            ? "Invalid age"
            : age >= 18
                ? "Eligible to vote"
                : "Not eligible to vote";
        alert(msg);
        document.write(msg);
    </script>
</body>
</html>