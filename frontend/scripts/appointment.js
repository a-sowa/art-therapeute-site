document.getElementById('appointment-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const notes = document.getElementById('notes').value;
  const token = localStorage.getItem('token'); // supposé être stocké après connexion

  if (!token) {
    alert("Vous devez être connecté pour prendre un rendez-vous.");
    window.location.href = "login.html";
    return;
  }

  try {
    const res = await fetch('http://localhost:8080/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ service, date, notes })
    });

    const data = await res.json();

    if (res.ok) {
      document.getElementById('confirmation-message').textContent = "✅ Rendez-vous pris avec succès !";
      document.getElementById('appointment-form').reset();
    } else {
      throw new Error(data.message || 'Erreur inconnue');
    }
  } catch (err) {
    alert("❌ Une erreur est survenue : " + err.message);
  }
});
