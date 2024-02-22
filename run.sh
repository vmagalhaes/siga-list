for i in {1..100}; do
  if npx playwright test --project=chromium | grep -q "1 passed"; then
    echo "Não tem vaga"
  else
    afplay /Users/ctw01085/Documents/workspace/siga-list/andre-ventura-aziado.mp3
  fi
  sleep 60
done

