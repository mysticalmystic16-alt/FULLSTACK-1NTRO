document.addEventListener('DOMContentLoaded', function() {
    const fetchBtn = document.getElementById('fetchBtn');
    const dataContainer = document.getElementById('dataContainer');
    const loading = document.getElementById('loading');
    const errorMsg = document.getElementById('errorMsg');

   
    fetchBtn.addEventListener('click', fetchUserData);

    async function fetchUserData() {
        
        showLoading(true);
        clearData();
        hideError();

        try {
            
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

        
            const users = await response.json();

          
            displayUsers(users);
            
        } catch (error) {
        
            console.error('Error fetching data:', error);
            showError('Failed to fetch data. Please try again.');
        } finally {
            showLoading(false);
        }
    }

    function displayUsers(users) {
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            
            userCard.innerHTML = `
                <div class="user-name">${user.name}</div>
                <div class="user-email">${user.email}</div>
                <div class="user-info">
                    <strong>Phone:</strong> ${user.phone}<br>
                    <strong>Website:</strong> ${user.website}<br>
                    <strong>Company:</strong> ${user.company.name}
                </div>
            `;
            
            dataContainer.appendChild(userCard);
        });
    }

    function showLoading(show) {
        loading.classList.toggle('hidden', !show);
        fetchBtn.disabled = show;
        fetchBtn.textContent = show ? 'Loading...' : 'Fetch Users Data';
    }

    function clearData() {
        dataContainer.innerHTML = '';
    }

    function showError(message) {
        errorMsg.textContent = message;
        errorMsg.classList.remove('hidden');
    }

    function hideError() {
        errorMsg.classList.add('hidden');
    }
});