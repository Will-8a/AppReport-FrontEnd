<script>
  import { notification } from '../stores/notification_store';
</script>

{#if $notification.message}
  <div class="notification {$notification.type}">
    {$notification.message}
  </div>
{/if}

<style>
  .notification {
    z-index:1;
    font-family: 'Play', sans-serif;
    position: fixed;
    top: 20px;
    right: 20px;
    color: #fff;
    padding: 15px;
    border: 1px solid;
    border-radius: 5px;
    animation: appear 4s ease-in-out;
    opacity: 0;
  }

  .success {
    background-color: #d4edda;
    color: #155724;
  }

  .failed {
    color: #721c24;
    background-color: #f8d7da;
  }

  @keyframes appear{
    10% {
      opacity: 1;
    }

    90% {
      opacity: 1;
    }
  }
</style>
